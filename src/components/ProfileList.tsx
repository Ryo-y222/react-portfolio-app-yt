import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProfileList: React.FC = () =>{
    return(
        <>
            <Box>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    <Grid item xs={12} md={12} sx={{textAlign: 'center'}}>
                        <Typography component="h2" variant="h2">
                            Profile
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{width: '100%'}}>
                            <img style={{ width: '100%', height: 'auto', borderRadius: "50%"}} src="/images/common/screenshot 3.jpg" alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box sx={{width: '100%', paddingLeft: {sx: '0px', md: '30px'}}}>
                            <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, quibusdam blanditiis corporis culpa deserunt suscipit consequatur obcaecati ullam explicabo iusto odio vitae cumque architecto, eos aliquam dignissimos nulla labore repellat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis, quod labore aliquam nulla iure quaerat asperiores necessitatibus esse fugiat earum neque. Explicabo assumenda sapiente, quos itaque veritatis aut nobis.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, voluptas ex rerum asperiores quia iste officia, accusamus porro inventore error incidunt vitae! Alias deserunt id quas aspernatur labore, corrupti nesciunt?
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{ textAlign: 'center'}}>
                        <Button variant="contained" size="large">
                            LearnMore
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            </>
        )
}

export default ProfileList;