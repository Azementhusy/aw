import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@mui/material';


import JavaScriptIcon from '../javascript.svg';

function SkillCard({ icon, label }) {
  return (
    <Card sx={{ display: 'inline-block', width: 150, margin: 2 }}>
      <CardContent style={{ textAlign: 'center' }}>
        <SvgIcon component={icon} style={{ fontSize: 40 }} color="action" />
        <Typography variant="subtitle1" component="div">
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}

function SkillsList() {
  return (
    <div>
      <SkillCard icon={JavaScriptIcon} label="JavaScript" />
    </div>
  );
}

export default SkillsList;