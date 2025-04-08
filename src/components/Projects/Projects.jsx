import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button, Chip, Grid, Box, Container } from '@mui/material';
import image from "../../assets/images.png"
import doctor from "../../assets/doctor.webp"
import patient from "../../assets/patient.webp"
import admin from "../../assets/admin.jpg"
import "./Project.css"
const projects = [
    {
      title: 'Doctor Dashboard',
      description: 'This Doctor web application can manage appointments, availability, and profile.',
      tech: ['Javascript','React', 'Redux'],
      image:doctor,
      url:"https://doctor.bharatteleclinic.co",
    },
    {
      title: 'Patient Appointment Portal',
      description: 'Patient can book appointments and connect with doctors instantly',
      tech: ['Bootstrap', 'React', 'Redux'],
      image:patient,
      url:"https://patient.bharatteleclinic.co",
    },
    {
      title: 'Super Admin Panel',
      description: 'Monitor patient-doctor interactions, prescriptions in real time.',
      tech: [ 'Express', 'Node','PostgreSQL'],
      image:admin,
      url:"https://superadmin.bharatteleclinic.co",
    },
  ];
const Projects = () => {
  return (
    <Box className="projectMainContainer" sx={{minHeight: '100vh', py: 8 }}>
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ color: 'white', mb: 4, fontWeight: 'bold' }}>
        PROJECTS
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            <Card sx={{ backgroundColor: '#576bcb', color: 'white', borderRadius: 4,width:"300px" }}>
              <CardMedia
                component="img"
                height="190"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2, justifyContent:"center" }}>
                  {project.tech.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech}
                      sx={{ backgroundColor: '#1f2937', color: 'white' }}
                    />
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 2, justifyContent:"center" }}>

                  <a href={project.url} target='_blank' rel="noopener noreferrer" style={{textDecoration:"none"}}>
                  <Button variant="contained" sx={{ borderRadius: 4 }}>
                    Demo
                  </Button>
                  </a>
             
                  {/* <Button variant="contained" sx={{ borderRadius: 4 }}>
                    Source
                  </Button> */}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
  )
}

export default Projects
