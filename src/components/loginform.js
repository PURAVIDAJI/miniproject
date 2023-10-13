import "./loginform.css"

const Loginform =() =>{
    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            
            <div className="login-btn">Login</div>

            <p className="text"> SNS계정으로 로그인하기 </p>
            <div className="alt-login">
                <div className="naver"></div>
                <div className="kakao"></div>
                <div className="google"></div>
            </div>

        </div>
    )
}

export default Loginform;