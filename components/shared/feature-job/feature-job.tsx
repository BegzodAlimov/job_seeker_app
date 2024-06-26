import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Title from '@/components/ui/title'
import developerIcon from "@/public/icons/developer.svg";
import designerIcon from "@/public/icons/designer.svg";
import markekerIcon from "@/public/icons/marketer.svg";
import Image from 'next/image';

const FeatureJob = () => {
  return (
    <div className="pt-[120px] flex items-center flex-col gap-y-14 pb-[120px]">
            <Title title="Featured Job" content="true">
              Jobs is a curated job board of the best jobs for developers,
              designers and marketers in the tech industry.
            </Title>

            <div className="rounded-[32px] overflow-hidden flex max-w-[1086px]">
              <Card className="py-8 px-10 bg-white border-0">
                <CardHeader className="mb-6">
                  <Image src={developerIcon} alt="card icon" />
                  <h3 className="font-font-family font-medium text-2xl text-primary-10">
                    Developer
                  </h3>
                </CardHeader>
                <CardContent className="mb-10">
                  <p className="font-font-family font-normal text-[16px] text-black tracking-[0.01em] mb-6">
                    Jobs is a curated job board of the best jobs for developers,
                    designers and marketers in the tech industry.
                  </p>
                  <ul className="font-font-family font-semibold text-[18px] text-black tracking-[0.01em] list-disc">
                    <li>211K+ contracts</li>
                    <li>1,665 skills</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={"outline"}
                    className="border-primary-10 text-primary-10 rounded-[32px] hover:bg-primary-10 hover:text-white"
                  >
                    Browse Job
                  </Button>
                </CardFooter>
              </Card>

              <Card className="py-8 px-10 bg-primary-10 border-0">
                <CardHeader className="mb-6">
                  <Image src={designerIcon} alt="card icon" />
                  <h3 className="font-font-family font-medium text-2xl text-white">
                    Designer
                  </h3>
                </CardHeader>
                <CardContent className="mb-10">
                  <p className="font-font-family font-normal text-[16px] text-white tracking-[0.01em] mb-6">
                    Jobs is a curated job board of the best jobs for developers,
                    designers and marketers in the tech industry.
                  </p>
                  <ul className="font-font-family font-semibold text-[18px] text-white tracking-[0.01em] list-disc">
                    <li>211K+ contracts</li>
                    <li>1,665 skills</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={"outline"}
                    className="border-white bg-white text-primary-10 rounded-[32px] hover:bg-primary-10 hover:text-white"
                  >
                    Browse Job
                  </Button>
                </CardFooter>
              </Card>

              <Card className="py-8 px-10 bg-white border-0">
                <CardHeader className="mb-6">
                  <Image src={markekerIcon} alt="card icon" />
                  <h3 className="font-font-family font-medium text-2xl text-primary-10">
                    Marketers
                  </h3>
                </CardHeader>
                <CardContent className="mb-10">
                  <p className="font-font-family font-normal text-[16px] text-black tracking-[0.01em] mb-6">
                    Jobs is a curated job board of the best jobs for developers,
                    designers and marketers in the tech industry.
                  </p>
                  <ul className="font-font-family font-semibold text-[18px] text-black tracking-[0.01em] list-disc">
                    <li>211K+ contracts</li>
                    <li>1,665 skills</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={"outline"}
                    className="border-primary-10 text-primary-10 rounded-[32px] hover:bg-primary-10 hover:text-white"
                  >
                    Browse Job
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
  )
}

export default FeatureJob