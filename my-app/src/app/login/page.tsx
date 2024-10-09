// m라우터 - 서버랑 클라이언트(컴퍼넌트)가 구분이되어야함



"use client"

import { useState } from "react"

export default function Login(){
    
    const [id, setid] = useState("");
    const [pwd, setpwd] = useState("");

    return(
       
             
                <form className="flex flex-col" method = "POST" action="http://localhost:8080/info" >
                    <input 
                        type = 'text'
                        value={id}
                        name ="id"
                        required 
                        onChange = { e => setid(e.target.value)}
                        placeholder = "아이디를 입력해주세요" 
                        
                    />

                    <input
                        type='password'
                        value={pwd}
                        name = "pwd"
                        required 
                        onChange = { e => setpwd(e.target.value)}
                        placeholder = "비밀번호를 입력해주세요"

                    />
                    <button className="inline-flex items-center bg-gray-100 border-1 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                            type = "submit"> 
                        로그인하기 
                    </button>
                
                </form>

                

           
       
    );
}