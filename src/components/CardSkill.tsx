import { Avatar, Box, Typography, useMediaQuery } from "@mui/material"
import { motion } from "motion/react"

interface CardProps {
    image?: string
    name: string
    info: string
    lastline? :string
}

export const CardSkill = (props : CardProps) => {
    const { image, name, info, lastline } = props

    const isMobile = useMediaQuery('(max-width:768px)');


    return (

        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        whileHover={{
            scale: 1.025,
            transition: { duration: 0.5 }
          }}
        viewport={{ amount: 0.8 }}>
            
            <div style={{height: isMobile ? 'auto' : '200px' ,width: isMobile? '327px' : '520px',borderRadius: 2 }}>
                <Box sx={{display:'flex', flexDirection: 'row', paddingLeft: 2, paddingTop: '15px' , gap: isMobile? 3:5}}>
                    {image ? <img style={{height:isMobile?'70px': '90px' , width:isMobile? '70px': '90px'}} src={image} /> : <Avatar variant="rounded" style={{height:'90px' , width: '90px'}}>TEST</Avatar> }
                    <Box sx={{display:'flex', flexDirection:'column',textAlign:'left' }}>
                        <Typography sx={{lineHeight: 1.4}} fontFamily={'Mitr'} fontWeight={'500'} variant={isMobile? "h6": "h5"} color="white">{name}</Typography>
                        <Typography sx={{lineHeight: 1.5 ,width: isMobile ? '230px':'290px'}} fontFamily={'Mitr'} variant={isMobile? "body2":"body1"} color="#d7d7d7" >{info}</Typography>
                        {lastline ? <Typography sx={{ paddingTop: 3, paddingRight: 2, textAlign:'right'}} fontFamily={'Mitr'} variant="body2" color="#d7d7d7" >{lastline}</Typography> : <></>}
                    </Box>
                </Box>
            </div>
        </motion.div>
    
)
}

