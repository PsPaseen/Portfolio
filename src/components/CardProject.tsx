import { Box, Button, Card, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material"
import { motion } from 'motion/react'
import TempImg from '../assets/images/React-icon.png'
import { useCallback, useMemo } from "react"

interface CardProjectProps {
    imageURL?: string
    name: string
    info: string
    link?: string
    large?: boolean
}

export const CardProject = (props : CardProjectProps) => {
    const { imageURL, name, info, link, large = false} = props

    const isMobile = useMediaQuery('(max-width:768px)');
    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1180px)');

    const CardWidth = useMemo(() => {
        if(large && isTablet){ //isTablet
            return "750px"
        }else if(!large && isTablet){
            return "350px"
        }else if(large && isMobile){ //isMobile
            return "350px"
        }else if(!large && isMobile){
            return "350px"
        }else if(large && !isMobile){ // desktop
            return "1232px"
        }else{
            return "400px"
        }
    },[large, isMobile,isTablet])

    const imgHeight = useMemo(() => {
        if(large && isMobile){
            return "150px"
        }else if(large && !isMobile){
            return "200px"
        }else if(!large && isMobile){
            return "100px"
        }else{
            return "150px"
        }
    },[large, isMobile])
    
    
    const onClickLink = useCallback(() => {
        return link ? window.location.href = link : console.log('stop')
    },[link])

    return (
    <motion.div
        initial="offscreen"
        whileInView="onscreen"
        whileHover={{
            scale: 1.01,
            transition: { duration: 0.2 }
          }}
        viewport={{ amount: 0.8 }}>   
        <Card elevation={1} sx={{width: CardWidth, background:'#292A33'}}>
            <CardMedia image={imageURL ? imageURL : TempImg } sx={{height: imgHeight}}/>
            <CardContent>
                <Box sx={{display:'flex' , flexDirection:'column'}} gap={2}>
                    <Box sx={{display:'flex' , flexDirection:'column' , textAlign: 'left', }}>
                        <Typography sx={{lineHeight: 1.4}} color="#fff" fontFamily={'Mitr'} fontWeight={'500'} variant="h5">{name}</Typography>
                        <Typography sx={{lineHeight: 1.5 , height: '96px',pb: large? 2 : 0, overflow:'auto'}} color="#d7d7d7" fontFamily={'Mitr'} variant="body1">{info}</Typography>
                    </Box>
                    {/* justifyContent:'right' ถ้าอยากเอาไว้ฝั่งขวา */}
                    {link ? <Box sx={{display:'flex' , flexDirection:'row'}}>
                        <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        viewport={{ amount: 0.8 }}>
                            <Button onClick={onClickLink} sx={{width:'80px',textTransform: 'none'}} size="small" variant="contained"><Typography fontFamily={'Mitr'} fontWeight={'400'}>Github</Typography></Button>
                        </motion.div>
                    </Box> : <> </>}
                </Box>
            </CardContent>
        </Card>
    </motion.div> 
    )
}