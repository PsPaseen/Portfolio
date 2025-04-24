import { Avatar, Box, Card, Typography } from "@mui/material"
import { motion } from "motion/react"

interface CardProps {
    image?: string
    name: string
    info: string
    lastline? :string
    bgcolor?: string
}

export const CardExp = (props : CardProps) => {
    const { image, name, info , bgcolor, lastline } = props

    return (

        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        whileHover={{
            scale: 1.025,
            transition: { duration: 0.5 }
          }}
        viewport={{ amount: 0.8 }}>
            <motion.div
            variants={{
                onscreen: {
                    y: 0,
                    transition: {
                        type: "spring",
                        bounce: 0.4,
                        duration: 0.8,
                    },
                },
            }}
            >
                <Card elevation={3} sx={{height: '200px' ,width: '520px',borderRadius:2 , backgroundColor: bgcolor ? bgcolor : '#373A5C'  }}>
                    <Box sx={{display:'flex', flexDirection: 'row', paddingLeft: 2, paddingTop: '15px' , gap: 5}}>
                        {image ? <img style={{ borderRadius: 4 ,height:'110px' , width: '130px'}} src={image} /> : <Avatar variant="rounded" style={{height:'170px' , width: '170px'}}>TEST</Avatar> }
                        <Box sx={{display:'flex', flexDirection:'column',textAlign:'left' }}>
                            <Typography sx={{lineHeight: 1.2}} fontFamily={'Mitr'} fontWeight={'500'} variant="h5" color="white">{name}</Typography>
                            <Typography sx={{lineHeight: 1.5 ,width:'290px'}} fontFamily={'Mitr'} variant="body1" color="#d7d7d7" >{info}</Typography>
                            {lastline ? <Typography sx={{ paddingTop: 3, paddingRight: 2, textAlign:'right'}} fontFamily={'Mitr'} variant="body2" color="#d7d7d7" >{lastline}</Typography> : <></>}
                        </Box>
                    </Box>
                </Card>
            </motion.div>
        </motion.div>
    
)
}