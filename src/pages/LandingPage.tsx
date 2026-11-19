import { Avatar, Box, Button, Chip, Typography, useMediaQuery } from "@mui/material"
import { Topbar } from "../components/Topbar"
import { motion } from "motion/react"
import Paseen from "../assets/images/image0.png"
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import AddIcon from '@mui/icons-material/Add';

import imageFront from "../assets/images/8_3-front-end-development-1.png"
import imageBack from "../assets/images/database.png"
import imageTool from "../assets/images/computer3.png"
import imageChat from "../assets/images/chat.png"
import imageDesign from "../assets/images/layout.png"
import imageKin from "../assets/images/Kin_Rai_Dee.png"
import imageGame from "../assets/images/game.png"
import imageGit from '../assets/images/github.png'
import imagePort from '../assets/images/port.png'
import imageSet from '../assets/images/set2.png'
import imageTracker from '../assets/images/tracker.png'
import imageMini from '../assets/images/mini.png'
import imageMobile from '../assets/images/computer.png'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


import { CardSkill } from "../components/CardSkill";
import { CardProject } from "../components/CardProject";
import { useCallback, useRef } from "react";

export const LandingPage = () => {
    const ContactRef = useRef<HTMLDivElement>(null)

    const isMobile = useMediaQuery('(max-width:768px)');
    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1180px)');
    const isTabletLandscape = useMediaQuery('(min-width:768px) and (max-width:1180px) and (orientation: landscape)');

    const onClickGit = useCallback(() => {
            window.location.href = 'https://github.com/PsPaseen'
        },[])

    const onClickScroll = useCallback(() => {
        if(ContactRef.current){
            ContactRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    },[])

    return (
    <>
       <Topbar />
            <Box sx={{ display: 'flex', flexDirection: 'column', height: isTabletLandscape? '100px': isTablet ? '100px' : isMobile ? '50px': '200px' , textAlign: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #292a33 0%, #373a5c 100%)' }} />

            <Box sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                height: isMobile ? 'auto' : '450px',
                backgroundColor: '#373A5C',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 6,
                p: isMobile ? 3 : 0
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '834px', pl: isTablet? 2 : 0}}>
                        <Box sx={{ display: 'flex', flexDirection: isTablet? 'row': isMobile ? 'column ':'row', gap: isTablet? 1 : isMobile ? 0 : 2, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                            <Typography fontFamily={'Mitr'} fontWeight={'400'} fontSize={isTablet? "30px": "40px"} color="white">สวัสดีครับ! ผมชื่อ</Typography>
                            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }}>
                                <Typography fontFamily={'Mitr'} fontWeight={'500'} fontSize={isTablet? "30px": "40px"} color="white">Paseen</Typography>
                            </motion.div>
                        </Box>
                        <motion.div initial={{ opacity: 0, scale: 0.3 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01], type: 'spring' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                <Typography fontFamily={'Mitr'} fontWeight={'200'} variant={isTablet? "h6": isMobile? "body1": "h6"} color="white">
                                    เรียนจบจากมหาวิทยาลัยธรรมศาสตร์รังสิต คณะวิทยาศาสตร์และเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์ด้วย
                                    <span style={{ fontWeight: '300' }}>เกียรตินิยมอันดับ2🥈 </span>
                                    ปัจจุบันทำงานตำแหน่ง <span style={{ fontWeight: '300' }}>Full Stack Developer</span> 💻 พัฒนาทั้งเว็บแอปพลิเคชัน ระบบหลังบ้าน และแอปมือถือ และพร้อมท้าทายเรียนรู้สิ่งใหม่ๆอยู่เสมอ!🔥
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                    <Chip label="React" sx={{ backgroundColor: '#292a33', color: 'white' }} icon={<CodeIcon />} />
                                    <Chip label="TypeScript" sx={{ backgroundColor: '#292a33', color: 'white' }} icon={<CodeIcon />} />
                                    <Chip label="Golang" sx={{ backgroundColor: '#292a33', color: 'white' }} icon={<ApiIcon />} />
                                    <Chip label="NodeJs" sx={{ backgroundColor: '#292a33', color: 'white' }} icon={<ApiIcon />} />
                                    <Chip label="SQL" sx={{ backgroundColor: '#292a33', color: 'white' }} icon={<StorageIcon />} />
                                    <Chip label="และอื่นๆ.." sx={{ backgroundColor: '#292a33', color: 'white' }} icon={<AddIcon />} />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                                    <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }}>
                                        <Button onClick={onClickScroll} variant="contained" sx={{ fontFamily: 'Mitr', width: '80px' }}>ติดต่อ</Button>
                                    </motion.div>
                                    <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }}>
                                        <Button onClick={onClickGit} variant="text" color="inherit" sx={{ fontFamily: 'Mitr', height: '36.5px', width: '80px', fontSize: '12px', textTransform: 'none' }}>
                                            <img style={{ height: '20px', width: '20px', marginRight: 4 }} src={imageGit} />Github
                                        </Button>
                                    </motion.div>
                                </Box>
                            </Box>
                        </motion.div>
                    </Box>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.3 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}>
                    <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }}>
                        <div style={{paddingRight: isTablet? '12px' : 0}}>
                        <Avatar variant="rounded" sx={{ height: isTablet? '350px' : isMobile ? '300px' : '400px', width: isTablet? '350px' : isMobile ? '300px' : '400px', boxShadow: '0px 0px 4px #fff'}} src={Paseen} />
                        </div>
                    </motion.div>
                </motion.div>
            </Box>

        <Box sx={{display:'flex', flexDirection:'column' , height: '200px', textAlign:'center', justifyContent:'center' , background: 'linear-gradient(to bottom, #373a5c 0%, #292a33 100%)'}}/>
             <Box sx={{ display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                height: isTablet? '1400px' : isMobile ? 'auto' : '600px',
                backgroundColor: '#292A33',
                gap: 6,
                p: isMobile ? 3 : 0, textAlign:'center'}}>
                <motion.div  
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ amount: 0.2 , once: true }}
                            variants={{ offscreen: {
                                y: 150,
                            },
                            onscreen: {
                                y: 50,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 1,
                                },
                            },}}>
                    <Typography fontFamily={'Mitr'} fontWeight={'500'} variant="h2" color="white">Skill ทักษะความสามารถ</Typography>
                    <Box sx={{display:'flex',flexDirection: 'row',flexWrap:'wrap',justifyContent:'center',paddingTop:8}}>
                        <CardSkill info="พัฒนาและออกแบบเว็บไซต์ด้วย React, Next.js, Angular, TypeScript, JavaScript, HTML, CSS และ UI Component อย่าง MUI, Ant Design, Tamagui" name="Front-End" image={imageFront}/>
                        <CardSkill info="พัฒนาระบบหลังบ้านด้วย Golang (Go Micro), Node.js และ Java ออกแบบฐานข้อมูลด้วย MySQL และ MsSQL" name="Back-End" image={imageBack}/>
                        <CardSkill info="พัฒนาแอปพลิเคชันมือถือทั้ง Android และ iOS ด้วย Expo (React Native) และ Android Studio" name="Mobile" image={imageMobile}/>
                        <CardSkill info="ใช้งานเครื่องมือต่างๆ ได้แก่ Git, GitLab, Docker, Postman, Jira และ Miro เป็นต้น" name="Tool" image={imageTool}/>
                        <CardSkill info="ทักษะการอ่านและฟัง ภาษาอังกฤษมีผลการวัดระดับด้วย TOEIC โดยได้คะแนน 660 หรือในระดับ Intermediate ทั้งสองทักษะ" name="Language" image={imageChat}/>
                        <CardSkill info="ความสามารถในการออกแบบงานโดยใช้ Photoshops หรือออกแบบโดยใช้ Canva" name="Design" image={imageDesign}/>
                    </Box>
                </motion.div>
             </Box>
        <Box sx={{display:'flex', flexDirection:'column' , height:'250px' , background: 'linear-gradient(to bottom, #292a33 0%, #373a5c 100%)'}}/>
            <Box sx={{display:'flex', flexDirection:'column' , minHeight: isTablet? '600px' : isMobile? 'auto':'800px', backgroundColor: '#373A5C' , textAlign:'center', justifyContent:'center'}}>
                <motion.div  
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ amount: 0.2 , once: true }}
                                variants={{ offscreen: {
                                    y: 150,
                                },
                                onscreen: {
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.4,
                                        duration: 1,
                                    },
                                },}}>
                        <Typography fontFamily={'Mitr'} fontWeight={'500'} variant="h2" color="white">Experience and Project</Typography>
                        <Typography fontFamily={'Mitr'} fontWeight={'400'} variant="h4" color="white">ประสบการณ์และโปรเจค</Typography>
                        <Box sx={{display:'flex', flexDirection:'row',flexWrap:'wrap' ,gap:2, pt: 12 ,justifyContent:'center', alignItems:'center' }}>
                                <CardProject large={true} name="Full Stack Developer (ปัจจุบัน)" info="ทำงานตำแหน่ง Full Stack Developer พัฒนาระบบ POS (Point of Sale) ระดับองค์กร ทั้งฝั่ง Front-End ด้วย React, Next.js, TypeScript และฝั่ง Back-End ด้วย Golang (Go Micro) รวมถึงพัฒนาแอปมือถือด้วย Expo (React Native) ทำงานร่วมกับทีมผ่าน GitLab, Jira และ Docker"/>
                                <CardProject name="ระบบ POS (Point of Sale)" info="พัฒนาระบบ POS ระดับองค์กร ครอบคลุมทั้งเว็บแอปพลิเคชัน และแอปมือถือบน Android และ iOS ด้วย Expo (React Native)"/>
                                <CardProject name="ระบบสมาชิก LINE LIFF" info="ออกแบบและพัฒนาระบบสมาชิกสำหรับลูกค้าของแต่ละร้านค้า โดยเชื่อมต่อกับ LINE LIFF ให้ลูกค้าสมัครและใช้งานสมาชิกผ่าน LINE ได้ทันที"/>
                                <CardProject name="ระบบ CMS" info="พัฒนาระบบ CMS สำหรับจัดการเนื้อหาและข้อมูลของแต่ละร้านค้าผ่านระบบหลังบ้าน"/>
                                <CardProject large={true} name="ฝึกงานสหกิจศึกษา บริษัทตลาดหลักทรัพย์แห่งประเทศไทย" info="ฝึกงานสหกิจศึกษาระยะเวลา 6 เดือน ตั้งแต่ กรกฏาคม 2567 ถึง ธันวาคม 2567 ได้รับหน้าที่เป็น Full-Stack Developer ได้รับมอบหมายโปรเจคพัฒนาและย้ายระบบ Back-Office จาก Angular เป็น Reactและใช้งานร่วมกับ UI Component MUI เพื่อให้การสร้างหน้าเว็บรวดเร็วเป็นไปในรูปแบบเดียวกัน ส่วนหลังบ้านมีการปรับปรุงและพัฒนาด้วยภาษา Java ให้มีการทำงานได้อย่างลื่นไหลไม่เกิดปัญหา" imageURL={imageSet}/>
                                <CardProject name="กินไรดี Kinraidee" info="เป็นเว็ปแอปพลิเคชันที่สุ่มอาหารที่อยู่ในรายการมาให้ในกรณีที่คิดไม่ได้ว่าจะกินอะไรดี! ได้รับตำแหน่งเป็น Front-End ออกแบบและใช้ภาษา HTML,CSS และ PHP" imageURL={imageKin} link="https://github.com/PUNNAz/Kinraidee"/>
                                <CardProject name="เกม Hangman" info="เป็นการ Fork Repository มาพัฒนาเกมให้มีความท้าทายและความสนุกมากยิ่งขึ้น และใช้หลักการพัฒนาด้วย Scrum Process มาวางแผนการพัฒนา" imageURL={imageGame} link="https://github.com/PUNNAz/CS266_Hangman"/>
                                <CardProject name="CalorieTracker" info="ใช้งาน Android Studio ภาษา Java และ SQLite ในการพัฒนาแอปพลิเคชันเก็บข้อมูลสุขภาพของผู้ใช้ และนับจำนวนแคลลอรี่ในการกินอาหาร" imageURL={imageTracker} link="https://github.com/KittamadLim/CaloriesTracker"/>
                                <CardProject name="Project Practical Training" info="เป็นการฝึกสร้างหน้าเว็ปไซต์ที่มีฟังก์ชันต่างๆ ไม่ว่าจะเป็นดึงข้อมูลหลังบ้านมาแสดงใน Table หรือรับไฟล์ Excel มาสรุปผลแล้วดาวน์โหลดไฟล์เป็นต้น" imageURL={imageMini} link="https://github.com/PsPaseen/mini_project02"/>
                                <CardProject name="Project Portfolio" info="เป็นการฝึกสร้างหน้าเว็ปไซต์แสดงผลงานของตนเอง และสามารถนำไปใช้งานในการสมัครงานได้อีกด้วย!" imageURL={imagePort} link="https://github.com/PsPaseen/Portfolio"/>
                        </Box>
                    </motion.div>
            </Box>
        <Box sx={{display:'flex', flexDirection:'column' , height:'100px', textAlign:'center', justifyContent:'center' , background: 'linear-gradient(to bottom, #373a5c 0%, #292a33 50%)'}}/>                    
        <Box ref={ContactRef} sx={{display:'flex', flexDirection:'column' , height:isMobile? '400px' : '400px', backgroundColor: '#292A33',alignItems:'center'}}>
                <motion.div  
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ amount: 0.2 , once: true }}
                            variants={{ offscreen: {
                                y: 100,
                            },
                            onscreen: {
                                y: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 1,
                                },
                            },}}>
                <Box sx={{display:'flex', flexDirection:'column',textAlign:'center' }}>
                    <Typography fontFamily={'Mitr'} fontWeight={'500'} variant="h2" color="white">Contact</Typography>
                    <Typography fontFamily={'Mitr'} fontWeight={'400'} variant="h4" color="white">ติดต่อ</Typography>
                </Box>

                <Box sx={{display:'flex', flexDirection:'column', pt:6 , textAlign:'center',pl: isMobile ? 2 : 8,gap:3 }}>        
                    <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
                        <LocalPhoneIcon sx={{height:'30px',width:'30px'}}/>
                        <Typography sx={{width:'80px'}} fontFamily={'Mitr'} fontWeight={'400'} variant="h6" color="white">Tel</Typography>
                        <Typography sx={{pl: isMobile? 0 : 6}} fontFamily={'Mitr'} fontWeight={'500'} variant="h6" color="white">083-311-9223</Typography>

                    </Box>
                    <Box sx={{display:'flex', flexDirection:'row', gap:1}}>
                        <EmailIcon sx={{height:'30px',width:'30px'}}/>
                        <Typography sx={{width:'80px'}} fontFamily={'Mitr'} fontWeight={'400'} variant="h6" color="white">Email</Typography>
                        <Typography sx={{pl: isMobile? 0 : 6}} fontFamily={'Mitr'} fontWeight={'500'} variant={isMobile? "body1": "h6"} color="white">paseen.san@gmail.com</Typography>
                    </Box>
                    <Box onClick={onClickGit} sx={{display:'flex', flexDirection:'row', gap:1,cursor:'pointer'}}>
                        <img  style={{height: '30px',width:'30px'}} src={imageGit}/>
                        <Typography sx={{width:'80px'}} fontFamily={'Mitr'} fontWeight={'400'} variant="h6" color="white">Github</Typography>
                        <Typography sx={{pl: isMobile? 0 : 6}} fontFamily={'Mitr'} fontWeight={'500'} variant="h6" color="white">PsPaseen</Typography>
                    </Box>
                </Box>
            </motion.div>
        </Box>
                             
    </>
    )
}