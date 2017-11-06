import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  
  handleDeleteOptions = () => {  
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  
  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber]; 
    //don't forget parenthesis for implicit returns   
    this.setState(() => ({
      selectedOption: option
    }));    
  }

  handleClearModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }
  
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
      
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } 

    this.setState((prevState) => ({options: prevState.options.concat([option])}));
  }

  //lifeycle methods
  componentDidMount() {

    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options}));
      }      
    } catch(e) {

    }

    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    if (options) {
      this.setState(() => ({options}));
    }
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }      
  }

  componentWillUnmount() {
    console.log('unmount');
  }
  //end lifecyle

  
  render() {    
    
    const subTitle = 'Put your life in the hands of a computer';    
    
    return (
      <div>
      <Header subTitle={subTitle} />

        <div className="container">

          <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />

          <div className="widget">
            <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
  
            <AddOption
            handleAddOption={this.handleAddOption}
            />
          </div>

          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearModal={this.handleClearModal}
          />

        </div>

      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}