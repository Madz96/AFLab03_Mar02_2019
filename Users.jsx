'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import User from './User.jsx';

export default class Users extends Component {
    static get propTypes() {
        return {
            users:  PropTypes.array
        }
    }

    constructor(props) {
        super(props);
    }
}