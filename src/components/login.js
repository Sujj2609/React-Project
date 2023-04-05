const btn =()=>{
return (
    <div>
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('container');
      signUpButton.addEventListener('click', () =&gt; {'{'}container.classList.add("right-panel-active");{'}'});
      signInButton.addEventListener ('click', () =&gt; {'{'}container.classList.remove("right-panel-active");{'}'});
      export default signUpButton;
    </div>
  );
}
export default btn;
// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {container.classList.add("right-panel-active");});


// signInButton.addEventListener ('click', () => {container.classList.remove("right-panel-active");});
// export default signUpButton;