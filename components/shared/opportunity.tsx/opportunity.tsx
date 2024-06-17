import { Button } from "@/components/ui/button"

const Opportunity = () => {
  return (
    <div className="py-20 bg-primary-10">
        <div className="container flex items-center justify-between">
             <div className="text-white max-w-[840px]">
              <h2 className="mb-4 font-font-family font-medium text-5xl">Find your next great opportunity!</h2>
              <p className="font-font-family font-normal text-[16px] max-w-[627px]">We are taking action to help our freelancers, our clients, and the people of the world and so can you.</p>
             </div>
             <Button className="bg-white border border-white rounded-[32px] font-font-family font-medium text-[16px] text-primary-10 hover:bg-primary-10 hover:text-white">Get Started</Button>
        </div>
    </div>
  )
}

export default Opportunity