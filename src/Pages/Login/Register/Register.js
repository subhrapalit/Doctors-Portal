import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div>
                <h2>Register: Create Account</h2>
                <form>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Re-type Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" />
                        </div>
                    </div>


                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>



                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <Button onClick={signInUsingGoogle} variant="info">Login With Google</Button>
            </div>
        </div>
    );
};

export default Register;