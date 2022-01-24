import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { auth } from "./MyFirebase"


const SignUp = () => {
    const [email, setEmail] = useState<string>();
    const [pass, setPass] = useState<string>();

    const handleSubmit = (e: Parameters<FormEventHandler<HTMLFormElement>>[0]) => {
        e.preventDefault();
        console.log("メール: " + email);
        console.log("パスワード: " + pass);
        if (email === undefined || pass === undefined) return;
        auth.createUserWithEmailAndPassword(email, pass);
    }

    type para = Parameters<ChangeEventHandler<HTMLInputElement>>;
    const emailChangeEventHandler = (e: para[0]) => {
        setEmail( (x) => e.target.value);
    }

    const passChangeEventHandler = (e: para[0]) => {
        setPass( (x) => e.target.value);
    }

    return (
        <div>
        <h1>ユーザー登録</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" onChange={emailChangeEventHandler}/>
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password"  onChange={passChangeEventHandler}/>
        </div>
        <div>
          <button>登録</button>
        </div>
        </form>
        </div>
    )
};

export default SignUp;