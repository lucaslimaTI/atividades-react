/* eslint-disable no-undef */
// eslint-disable-next-line strict
'use strict';
// eslint-disable-next-line no-undef
const e = React.createElement;
class LikeButton extends React.Component {
constructor(props) {
super(props);
this.state = { liked: false };
}
render() {
if (this.state.liked) {
return 'Pronto agora basta esperar mais 5 segundos para exibir a mensagem';
}
return e(
'button',
{ onClick: () => this.setState({ liked: true }) },
'Clique aqui para exibir a mensagem imediatamente'
);
}
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
root.render(e(LikeButton));