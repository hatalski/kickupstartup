import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaComposeSurveyQuestions extends Component {
  constructor(props) {
    super(props);

    this.saveAndGoNext = this.saveAndGoNext.bind(this);
    this.goNext = this.goNext.bind(this);
  }
  saveAndGoNext(event) {
    event.preventDefault();
    const idea = this.props.idea;
    Meteor.call("idea.update.name", idea._id, this.state.name, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  goNext() {
    const idea = this.props.idea;
    Meteor.call("idea.update.nextstep", idea._id, 24, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  render () {
    return (
      <div className="card white row-border clearfix">
        <i className="fa fa-lock card-top-icon pull-right tooltipped" data-position="left" data-delay="50" data-tooltip="Not publicly visible"></i>
        <div className="modal-header">
          <h3 className="modal-title">Шаг 6. Вопросы для опросника</h3>
        </div>
        <div className="modal-body">
          <p>Что бы Вы хотели узнать о Ваших потенциальных клиентах или о том, что они думают о Вашей идее?</p>
          {/* <div className="form">
            <div className="input-field">
              <label htmlFor="ideaName" className="active"><T>ideas.header.title</T></label>
              <input id="ideaName" value={this.state.name} onChange={this.handleNameChange} placeholder="Around the World Jobs" type="text" />
            </div>
          </div> */}
          <div className="col s12 text-center">
            {/* <button onClick={this.saveAndGoNext} type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
              Сохранить
            </button> */}
            <div className="modal-bottom-link">
              <a href="#" onClick={this.goNext}>Пропустить и перейти к следующему шагу</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
