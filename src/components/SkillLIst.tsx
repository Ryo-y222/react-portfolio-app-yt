import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RadarChart from "../components/RadarChart"

const SkillList: React.FC = () => {

    const setSkillLists = [
        {
          labels: ['HTML/CSS', 'SASS / SCSS', 'Javascript', 'TypeScript', 'React', 'Next.js'],
          datasets: [
            {
              label: 'Front-end',
              data: [3, 3, 2, 2, 2, 2],
              fill: true,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        {
          labels: ['PHP', 'Laravel', 'Ruby', 'Ruby on Rails', 'python', 'Django'],
          datasets: [
            {
              label: 'Back-End',
              data: [3, 3, 1, 1, 2, 1],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        },
        {
          labels: ['AWS', 'GCP', 'Linux', 'Windows', 'Nginx', 'Apache'],
          datasets: [
            {
              label: 'DevOps',
              data: [2, 1, 2, 1, 2, 2],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
    ];

    const setSkillChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            r: {
                max: 3,
                min: 0,
                ticks: {
                    stepSize: 1,
                }
            }
        }

    }
    
    return(
        <>             
            <Grid item xs={12} md={12} sx={{ textAlign: 'center'}}>
              <Typography component="h2" variant="h2">
                Skill
              </Typography>
            </Grid>

            {
                setSkillLists.map((data) => {
                    return (
                        <Grid item xs={12} md={4} component="div">
                          <Box sx={{ width: '100%', height: {xs: '400px', md: '200px' } }}>
                            <RadarChart options={setSkillChartOptions} data={data}/>
                          </Box>
                        </Grid>
                    )
                })
            }
            <Grid item xs={12} md={12} sx={{ textAlign: 'center'}} >
            <Button variant="contained" size="large">
                LearnMore
            </Button>
            </Grid>
        </>
    )
}

export default SkillList;
