import { Box, Typography } from "@mui/material"
import { motion } from "motion/react"
import { CardExp } from "../components/CardExp"
import imageCool  from "../assets/images/coolest.jpg"
import imageFront from "../assets/images/8_3-front-end-development-1.png"
import imageBack from "../assets/images/database.png"
import imageTool from "../assets/images/computer2.png"
import imageKin from "../assets/images/Kin_Rai_Dee.png"
import imageGame from "../assets/images/game.png"

import { CardSkill } from "../components/CardSkill"
import { CardProject } from "../components/CardProject"
import { Topbar } from "../components/Topbar"

export const TestPage = () => {

    return (
        <>
            <Topbar />
            <Box sx={{display:'flex', flexDirection:'column' , height:'500px', textAlign:'center', justifyContent:'center' , background: 'linear-gradient(to bottom, #292a33 0%, #373a5c 100%)'}}></Box>

            <Box sx={{display:'flex', flexDirection:'column' , height:'500px', backgroundColor: '#292A33' , textAlign:'center', justifyContent:'center'}}>#292A33 : background primary</Box>
            <Box sx={{display:'flex', flexDirection:'column' , height:'500px', backgroundColor: '#373A5C' , textAlign:'center', justifyContent:'center'}}>#373A5C : background second</Box>
            <Box sx={{display:'flex', flexDirection:'column' , height:'500px', backgroundColor: '#39428F' , textAlign:'center', justifyContent:'center'}}>#39428F : Topbar , Buttombar</Box>
            <Box sx={{display:'flex', flexDirection:'column' , height:'500px', backgroundColor: '#2736C2' , textAlign:'center', justifyContent:'center'}}>#2736C2 : Button</Box>

            <Box sx={{display:'flex', flexDirection:'column' , height:'500px', textAlign:'center', justifyContent:'center' , background: 'linear-gradient(90deg,rgba(51, 155, 42, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)'}}>
                {/* การใช้ motion ซ้อนกัน2 ชั้นเพื่อกำหนดตัวครอบ (container ตัวแม่) กับตัวลูกเพื่อให้ทำงานแยกกัน โดยตัวแม่จะเป็นคนควบคุมการทำงานว่าทำงานตอนไหน ตัวลูกจะกำหนดว่าจะ animation ยังไง */}
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ amount: 0.8 }}>
                                    <motion.div variants={{
                                        offscreen: {
                                            y: 300,
                                        },
                                        onscreen: {
                                            y: 0,
                                            transition: {
                                                type: "spring",
                                                bounce: 0.8,
                                                duration: 0.8,
                                            },
                                        },
                                    }}>
                                        <Typography fontSize={64}> If you can read this text, YOU ARE SO COOL</Typography>
                                        <Typography fontSize={64} fontFamily={'Mitr'} fontWeight={'500'}> Hello! ผมชื่อ พศิน Font Mitr</Typography>
                                    </motion.div>
                        </motion.div>
            </Box>

            <Box sx={{display:'flex', flexDirection:'column' , height:'500px', textAlign:'center', justifyContent:'center' , background: 'linear-gradient(90deg,rgba(18, 48, 77, 1) 27%, rgba(0, 64, 24, 1) 100%)'}}>
                <Typography fontSize={64} fontFamily={'Mitr'} fontWeight={'500'}>Skill ทักษะความสามารถ</Typography>
                <Box sx={{display:'flex', flexDirection:'row',flexWrap: 'wrap' , gap: 2, justifyContent:'center'}}>
                    <CardSkill info="มีความสามารถในการพัฒนาและออกแบบเว็บไซต์ด้วยภาษา React, JavaScript, TypeScript และใช้ UI Component MUI" name="Front-End" image={imageFront}/>
                    <CardSkill info="สามารถพัฒนาระบบหลังบ้านด้วย NodeJs และออกแบบฐานข้อมูลด้วย MySQL หรือ SQL Server" name="Back-End" image={imageBack}/>
                    <CardSkill info="สามารถใช้งานเครื่องมือต่างๆได้ ไม่ว่าจะเป็น Git, Gitlab, Miro และ Jira เป็นต้น" name="Tool" image={imageTool}/>


                    <CardExp info="test2" name="test2"/>
                    <CardExp info="ได้รับตำแหน่ง Full-Stack Developer มีหน้าที่ออกแบบและพัฒนาระบบด้วยภาษา React และ Java" name="ฝึกงาน ตลาดหลักทรัพย์แห่งประเทศไทย" lastline="ระยะเวลา 6 เดือน" image={imageCool}/>

                </Box>                                    
            </Box>

            <Box sx={{display:'flex', flexDirection:'column' , height:'500px', textAlign:'center', justifyContent:'center' , backgroundColor: '#292A33'}}>
                <Typography fontSize={64} fontFamily={'Mitr'} fontWeight={'500'}>Project และ การฝึกงาน</Typography>
                <Box sx={{display:'flex', flexDirection:'row',flexWrap: 'wrap' , gap: 2, justifyContent:'center'}}>
                        <CardProject name="กินไรดี Kinraidee" info="เป็นเว็ปแอปพลิเคชันที่สุ่มอาหารที่อยู่ในรายการมาให้ในกรณีที่คิดไม่ได้ว่าจะกินอะไรดี! ได้รับตำแหน่งเป็น Front-End ออกแบบและใช้ภาษา HTML,CSS และ PHP" imageURL={imageKin} link="https://github.com/PUNNAz/Kinraidee"/>
                        <CardProject name="เกม Hangman" info="เป็นการ Fork Repository มาพัฒนาเกมให้มีความท้าทายและความสนุกมากยิ่งขึ้น และใช้หลักการพัฒนาด้วย Scrum Process มาวางแผนการพัฒนา" imageURL={imageGame} link="https://github.com/PUNNAz/CS266_Hangman"/>
                </Box>                                    
            </Box>

            <Box sx={{display:'flex', flexDirection:'column' , height:'500px', textAlign:'center', justifyContent:'center' , background: 'linear-gradient(to bottom, #292a33 0%, #373a5c 100%)'}}></Box>
            <Box sx={{display:'flex', flexDirection:'column' , height:'500px', textAlign:'center', justifyContent:'center' , background: 'linear-gradient(to bottom, #373a5c 0%, #292a33 100%)'}}></Box>
            <Box sx={{display:'flex', flexDirection:'column' , height:'500px', textAlign:'center', justifyContent:'center' , background: 'linear-gradient(to bottom, #292a33 0%, #373a5c 100%)'}}></Box>


        </>
    )
}