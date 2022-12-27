import React from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import UseToken from '../../Hooks/UseToken';

const SignUp = () => {
    //signin with google implementatyion
    const [
        signInWithGoogle, googleuser, googleloading, gerror]
        = useSignInWithGoogle(auth);
    //work in react hook form
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        //Create or New Signup with email password implementation
        CreateUserWithEmailAndPassword, user, loading, error
    ] = useCreateUserWithEmailAndPassword(auth);
    //update profile
    const [updateProfile, updating, uperror] = useUpdateProfile(auth);
    //call useToken froms hooks
    const [token] = UseToken(user || googleuser);

    const navigate = useNavigate();
    const onSubmit = async data => {
        await CreateUserWithEmailAndPassword(data.email, data.password);
        await (updateProfile({ displayName: data.name }));
        navigate('/appointment')
        
    }
    let signIneror;
    if (error || gerror || uperror) {
        signIneror = <p className='text-red-500'><small>{error?.message || gerror?.message || uperror.message}</small></p>
    }
    //lodaer using
    if (loading || googleloading || updating) {
        return <Loading></Loading>
    }
    if (token) {
        navigate('/appointment');
    }
    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-slate-300 to-slate-400'>
            <div class="card w-96 bg-base-100 shadow-2xl shadow-blue-900 opacity-80">
                <div class="card-body">
                    <h2 class="text-center text-3xl font-serif uppercase">SignUP</h2>
                    <form className='grid grid-cols-1 gap-4' onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' className='input input-bordered input-secondary w-full max-w-xs' placeholder='Enter Your Name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is requierd'
                                },
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'Wrong Email Use Capital and number Combination'
                                }
                            })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        <input type='email' className='input input-bordered input-secondary w-full max-w-xs' placeholder='Enter Your Email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is requierd'
                                },
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'Wrong Email Use Capital and number Combination'
                                }
                            })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        <label className='text-red-500' for="email">
                            {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
                        </label>
                        <input type='password' className='input input-bordered input-secondary w-full max-w-xs'
                            placeholder='Enter Your Password'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is requierd'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'error message'
                                }
                            })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p role="alert">{errors.password?.message}</p>}
                        {
                            signIneror
                        }
                        <input className='btn btn-outline btn-secondary' type="submit" value='SignUp'
                        />
                    </form>
                    <p className='text-ancient'>Already User? <Link className='text-primary' to="/login">SignIn</Link></p>

                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline btn-accent">
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;