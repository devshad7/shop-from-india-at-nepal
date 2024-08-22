import Navbar from '@/components/Navbar'

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="h-[85vh] w-[100%] flex justify-center items-center">
                <div>
                    <div className="flex gap-1">
                        <strong>404</strong>
                        <p>|</p>
                        <p>Not Found</p>
                    </div>
                </div>
            </div>
        </>
    )
}