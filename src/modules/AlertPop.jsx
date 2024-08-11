export default function AlertPop(){
    return(
        <div className="fixed top-4 left-0 w-full flex justify-center">
            <div className="absolute w-11/12 h-9 bg-red-300 rounded-md text-white flex justify-center items-center border border-white">
                <p>Введена недостатня кількість символів</p>
            </div>
        </div>
    )
}