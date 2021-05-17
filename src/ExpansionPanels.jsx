import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { FormGroup, Label, Input } from 'reactstrap';

const ExpansionPanels = () => {

  return (
  <Accordion defaultExpanded>
        <AccordionSummary
         
         aria-controls="panel1c-content"
         id="panel1c-header"
         >
          <div>
            <Typography>詳細を設定</Typography>
          </div>
        
        </AccordionSummary>
        <AccordionDetails >
          <div/>
          <div>
          <Typography>memo</Typography>
          </div>
          <div>
            <Typography>
              <input type='text' className='form-control'/>
            </Typography>
          <div>
          <Typography>時間</Typography>
          </div>
          <div>
          <Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
          <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          // value={selectedDate}
          // onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          />
      </Grid>
    </MuiPickersUtilsProvider>
          </Typography>
          </div>
          <div>
          <Typography>カテゴリ</Typography>
          </div>
          <div>
          <Typography>
          <FormGroup>
        <Input type="select" name="select" id="exampleSelect" >
        {/* onClick={handleSelect} */}
          <option value='☆☆★'>買い物リスト</option>
          <option value='☆★★'>勉強</option>
          <option value='★★★'>仕事</option>
          <option value='★★★'>モンハン</option>
          <option value='★★★'>新しいカテゴリを追加</option>
        </Input>
        </FormGroup>
            
          </Typography>
          </div>
          <div>
          <Typography>優先度</Typography>
          </div>
          <div>
          <Typography>
          <FormGroup>
        <Input type="select" name="select" id="exampleSelect" >
        {/* onClick={handleSelect} */}
          <option value='☆☆★'>☆☆★</option>
          <option value='☆★★'>☆★★</option>
          <option value='★★★'>★★★</option>
        </Input>
        </FormGroup>
            
          </Typography>
          </div>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions>
      </Accordion>
      )
}

export default ExpansionPanels;