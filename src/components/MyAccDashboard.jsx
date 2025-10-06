

const MyAccDashboard = () => {
    return (
        <div>
            <div className="text-[20px]/[30px] font-bold bg-[#F7F6F7] p-[30px] border-[2px] border-[#2F8EFF]">
                <p>Hello lightspeed (not lightspeed? <span className='text-[#2F8EFF] underline'>Log Out</span>)</p>
                <p>From your account dashboard you can view your <span className='text-[#2F8EFF] underline'>recent orders</span>, manage your <span className='text-[#2F8EFF] underline'>shipping and billing addresses</span>, and <span className='text-[#2F8EFF] underline'>edit your password and account details</span>.</p>
            </div>
            <div className="flex justify-between text-[20px]/[30px] font-bold bg-[#F7F6F7] p-[30px] border-[2px] border-[#2F8EFF]">
                <div className='flex gap-[10px] items-center'>
                    <div className='w-[20px] h-[20px] bg-[#D9D9D9] border border-[#D9D9D9] rounded-[100%] '></div>
                    <p className='font-medium'>No order has been made yet.</p>
                </div>
                <button className='underline text-[#2F8EFF]'>Browse products</button>
            </div>
        </div>
    )
}

export default MyAccDashboard
