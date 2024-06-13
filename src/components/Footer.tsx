function Footer() {
    return (
        <>
            <div className='flex justify-center mt-72 bg-green-400 text-white gap-40 h-[150px] sm:gap-20'>

                <div className='flex flex-col gap-2'>

                    <span className='mb-4 text-[20px]'>Company</span>
                    <button>
                        Home
                    </button>
                    <button>
                        About us
                    </button>
                    <button>
                        Clients
                    </button>
                </div>

                <div className='flex flex-col gap-2'>
                    <span className='mb-4 text-[20px]'>Navigation</span>
                    <button>
                        Settings
                    </button>
                    <button>
                        Story
                    </button>
                    <button>
                        News
                    </button>
                </div>

            </div>
        </>

    )
}

export default Footer;