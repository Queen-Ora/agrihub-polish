import {Box, Container, AppBar, Toolbar, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

function HomePage() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Gestion des Ressources Agricoles
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Statistiques Générales
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Vue densemble des données agricoles.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Voir Détails</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Gestion des Cultures
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Suivi des cultures et des récoltes.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Voir Détails</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Gestion des Stocks
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Suivi des inventaires et des stocks.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Voir Détails</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box flexDirection="row" display={"flex"}>
        <Typography variant="h4" component="h2" gutterBottom>
          Derniers Évènements1
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Derniers Évènements2
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Derniers Évènements3
        </Typography>
        
      </Box>
      
    </Container>
  );
}

export default HomePage;
