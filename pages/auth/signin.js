import { getProviders, signIn } from "next-auth/react"
import Header from '../../components/Header'

function signin({ providers }) {
    return (
        <>
            <Header />

            <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>

            <img 
                className='w-80 rounded-md'
                src="https://www.logogenie.net/images/articles/instagram-logo2.jpg" 
                alt="Instagram Logo" 
            />
            <p className='font-xs italic mt-3'>
                This is just clone version using NextJS, Tailwind CSS and Firebase
            </p>

            <div className='mt-40'>
                {
                    Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className='p-3 bg-blue-500 rounded-lg text-white'
                                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))
                }
            </div>
            </div>

            
        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props: { providers },
    }
}

export default signin
