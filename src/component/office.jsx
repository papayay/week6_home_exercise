import { Stack, Typography, Avatar, Paper, Backdrop } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';



function Name_Email_Phone_1({ name, title, email, phone }) {

    return (
        <>
            <Typography variant="h5">
                {name} {title}
            </Typography>
            <Typography variant="body1">
                <EmailIcon /> {email}
            </Typography>
            <Typography variant="body1">
                <ContactPhoneIcon /> {phone}
            </Typography>
        </>
    )

}

export function Name_Email_Phone_2({ name, title, email, phone }) {
    return (
        <>
            <Stack direction="column" spacing={0}>
                <Name_Email_Phone_1 name={name} title={title} email={email} phone={phone} />
            </Stack>
        </>

    )
}

export function OfficeInfoHeader({ name, title, email, phone, imglink }) {
    return (
        <>
            <Paper elevation={8} sx={{ padding: 2, maxWidth: "500px", height: "200px", backgroundColor: "#e6acbd" , display: 'flex', alignItems: 'right', justifyContent: 'right'}} >
                <Stack direction="row" spacing={2}>
                    <Avatar alt="professor" src={imglink} sx={{ width: 100, height: 100 , boxShadow: 12 }} variant="square" />
                    <Name_Email_Phone_2 name={name} title={title} email={email} phone={phone} />
                </Stack>
            </Paper>
        </>

    )
}//padding代表內邊距
//display = flex 很重要很重要 會把東西丟進來所以寫下面兩行才有用
//alignItems: 'corner', justifyContent: 'center'

function officeout ({}){
    return(
        <>
            <Backdrop>
            </Backdrop>
        </>
    )
}







// function OfficeInformation({ imgLink, title, name, officeHour, email, phone, office }) {
//     return (
//         <>
//         <Paper elevation={3} sx={{p: 2, maxWidth: "500px", height: "700px"}}> 
//             <OfficeInfoHeader imgLink={imgLink} name={name} title={title} email={email} phone={phone} />
//         </Paper>
//         </>
//     )
// }//elevation 用來用用深淺