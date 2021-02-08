import * as sapper from '@sapper/app';
import 'highlight.js/styles/solarized-dark.css';
import hljs from 'highlight.js';

sapper.start({
	target: document.querySelector('#sapper')
});