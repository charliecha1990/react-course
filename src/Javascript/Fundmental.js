import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

    this.state = {
       chipData: [
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
      ]
    }
  const handleDelete = chipToDelete => () => {
    if (chipToDelete.label === 'React') {
      alert('Why would you want to delete React?! :)');
      return;
    }

    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    <Paper className={classes.root}>
      {chipData.map(data => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <Chip
            key={data.key}
            icon={icon}
            label={data.label}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}

class Fundmental extends Component {
    constructor(props) {
        super(props)

        this.state = {
           seasons: ['Spring','Summer','Autumn','Winter'],
           display: false,
           numbers: [1,2,3,4],
           emptyArray: [[1,23],[123,3]]           
        }

        this.pushArray = this.pushArray.bind(this)
        this.filter = this.filter.bind(this)

    }


// 1. conditional render & Iteration

//    Array.map()


   componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(response => this.setState({
        //     users: response
        // }))

        // this.setState({display: true})

        // setTimeout(this.state.numbers.forEach(element => 
        //     this.state.emptyArray.push(element+1),
        //     console.log(this.state.emptyArray)
        // ),1000)

    }

    pushArray () {
        this.state.numbers.forEach(element => 
            this.state.emptyArray.push(element+1)
        )
        // this.setState({display: true})

        console.log(this.state.emptyArray)
    }

    filter() {
        console.log(this.state.numbers.filter(element => {
            return element > 2  
        }))

        console.log(this.state.emptyArray[1][1])
    }

    render() {
        return (
            <div>
                {this.state.display &&
                this.state.seasons.map(element => 
                    <Chip 
                       key={element}
                       // icon={icon}
                       label={element}
                       // onDelete={handleDelete(data)}
                       // className={classes.chip}
                    />)}
                <button onClick={()=>this.setState({display: !this.state.display})}>Click to see the chips</button>
                {/* {this.state.display && this.state.users.map(user=><h3>{user.id}</h3>)} */}
                <button onClick={this.pushArray} >Push array</button>
                <button onClick={this.filter} >Filter number</button>
                <React.Fragment>
                    {this.state.numbers.map(element=> <h3 key={element}> {element}</h3>)}
                </React.Fragment>
                <React.Fragment>
                    {this.state.emptyArray.map(element=> <h3 key={element}> {element}</h3>)}
                </React.Fragment>
           </div>
        )
    }
}

export default Fundmental
