import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBold, faItalic, faLink, faQuoteRight, faCode, faImage, faListOl, faListUl, 
    faHeading, faMinus, faUndoAlt, faRedoAlt } from '@fortawesome/free-solid-svg-icons';

library.add( faBold, faItalic, faLink, faQuoteRight, faCode, faImage, faListOl, faListUl, 
    faHeading, faMinus, faUndoAlt, faRedoAlt );

Vue.component('fa-icon', FontAwesomeIcon);
