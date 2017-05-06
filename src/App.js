import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

var Form = React.createClass({
   // getInitialState: function() {
   //     return { title: '', link: ''};
   //  },
    handleTitleChange: function(e) {
       this.setState({title: e.target.value});
     },
     handleLinkChange: function(e) {
        this.setState({link: e.target.value});
     },
     handleSubmit : function(e) {
        e.preventDefault();
        var title=this.refs.title.value.trim();

      var link=this.refs.link.value.trim();
        if (!title ) {

            return;
        }
        this.props.addHandler(title,link );
        
this.refs.title.value='';
      this.refs.link.value='';


     },
     render : function() {
       return (
         <div className="container">
                   <div className="row">
                      <div className="col-md-6 col-md-offset-3"> <form style={{marginTop: '30px'}}>
            <h3>Add a new post</h3>
            <div className="form-group">
              <input type="text"
                className="form-control" placeholder="Title" ref="title"
               
                onChange={this.handleTitleChange} ></input>
            </div>
            <div className="form-group">
              <input type="text"
                 className="form-control" placeholder="Link" ref="link"
                 
                 onChange={this.handleLinkChange} ></input>
            </div>
            <button type="submit" className="btn btn-primary"
                 onClick={this.handleSubmit} >Post</button>
          </form>
           </div>
         </div>
         </div>
        );
      }
   });


var NewsList = React.createClass({
   render:function(){
  return(
        <ul className="list-group"  >
          {
            this.props.posts.map(post =>{
           return <li  post={post} key={post.id}><a href={post.link}> {post.title}</a> <a onClick={this.deleteitem.bind(this,post)
           } className="delete" href="#">x</a></li>
          })
        }
        </ul>
  
  )
 },
 deleteitem(post){
this.props.deleteHandler(post);
 }

}) ;  

var HackerApp = React.createClass({ 
    getInitialState: function() {
       return {
       
        posts:[
        ]
     }
      
    },
    
      addPost:function(title,link){
 
  console.log("add");
  var newitem={
    id:this.state.posts.length +1,
    title:title,
    link:link
  }


  this.setState({posts:this.state.posts.concat(newitem)});
    }, 
        
    render: function(){
        
        return (
           <div >
               <NewsList posts={this.state.posts} deleteHandler={this.deletepost}/>
       
               <Form addHandler={this.addPost}  />
          </div>
        );
    },
    deletepost:function(post){
  var posts=this.state.posts;

   for(var i=0;i<posts.length;i++){
    if(posts[i].id==post.id){
      posts.splice(i,1);

    }
   }
   
   this.setState({posts:posts});

    

 },
 
});

export default HackerApp;
