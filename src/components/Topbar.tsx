import { Box, Typography } from "@mui/material"
import { motion } from 'motion/react'
import imageGit from '../assets/images/github.png'
import { useCallback } from "react"

export const Topbar = () => {

    const onClickGit = useCallback(() => {
        window.location.href = 'https://github.com/PsPaseen'
    },[])
    return (
        //ที่ต้องมี overflow: hidden เพราะส่วนของGITHUB มันขยายทำให้ขนาดมันเลยจอไป ทำให้เกิด scorllแกนx overflow แบบ hidden ทำให้ส่วนนั้นซ่อนไป
    <Box sx={{display:'flex', flexDirection:'row', height:'50px', backgroundColor:'#292A33', alignItems:'center', justifyContent:'space-between' , overflow:'hidden'}}>
        <motion.div whileTap={{scale: 0.95, transition: {duration: 0.3}}} whileHover={{scale: 1.02, transition: {duration: 0.3}}}>
            <Box sx={{display:'flex', flexDirection:'row', paddingLeft: 2}}>
                    <Typography fontFamily={'Mitr'} fontWeight={'600'} variant="h5" color="white">Paseen_<span style={{fontFamily: 'Mitr' , fontWeight:'normal'}}>DEV</span></Typography>
            </Box>
        </motion.div>
        <motion.div whileTap={{scale: 0.95, transition: {duration: 0.3}}} whileHover={{scale: 1.02, transition: {duration: 0.3}}}>
            <Box onClick={onClickGit} sx={{display:'flex', flexDirection:'row', paddingRight:2, gap:1}}>
                    <img src={imageGit} style={{height: '24px',width:'24px'}}/>
                    <Typography fontFamily={'Mitr'} >Github</Typography>
            </Box>
        </motion.div>
    </Box>
    )
}