'use client'
import { AuthContext } from "@/providers/auth";
import { useContext } from "react";


export default function Home() {
  const { isLogged, setIsLogged } = useContext(AuthContext);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary" onClick={()=> setIsLogged(!isLogged)}>Get Started</button>
        </div>
      </div>
    </div>
  );
}
