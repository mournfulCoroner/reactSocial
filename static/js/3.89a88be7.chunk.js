(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{246:function(t,e,s){t.exports={profileHeader:"ProfileHeader_profileHeader__NIVT7",profile_status:"ProfileHeader_profile_status__2gQah",description:"ProfileHeader_description__1RXC9",description_input:"ProfileHeader_description_input__2lxIG",back_profile:"ProfileHeader_back_profile__1FsLk",avatar:"ProfileHeader_avatar__xIMh4",name:"ProfileHeader_name__26h-t"}},247:function(t,e,s){},248:function(t,e,s){t.exports={post:"Post_post__30YIX",main_area:"Post_main_area__1mato",post_avatar:"Post_post_avatar__3YSId",post_text:"Post_post_text__3cZUY",add_area:"Post_add_area__3jeh4"}},249:function(t,e,s){t.exports={wall:"Wall_wall__3E3rv",submit_box:"Wall_submit_box__2lzQS",submit_area:"Wall_submit_area__JbrGU",submit_button:"Wall_submit_button__1E8vM"}},250:function(t,e,s){"use strict";s.r(e);var a=s(2),r=s(3),i=s(4),o=s(9),c=s(10),n=s(0),u=s.n(n),l=s(20),p=s(247),d=s.n(p),_=s(40),b=s(24),j=s(246),D=s.n(j),f=s(1),m=function(t){var e=Object(n.useState)(!1),s=Object(b.a)(e,2),a=s[0],r=s[1],i=Object(n.useState)(t.status),o=Object(b.a)(i,2),c=o[0],u=o[1];Object(n.useEffect)((function(){u(t.status)}),[t.status]);return Object(f.jsx)("div",{className:D.a.profile_status,children:a?Object(f.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),t.updateUserStatus(c)},onChange:function(t){u(t.currentTarget.value)},className:D.a.description_input,value:c}):Object(f.jsx)("div",{onDoubleClick:function(){r(!0)},className:D.a.description,children:c})})};var x=function(t){return t.user?Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:D.a.back_profile,children:Object(f.jsx)("img",{alt:"",src:"https://st.depositphotos.com/1006076/3995/i/600/depositphotos_39951147-stock-photo-spring-landscape-watercolor-flowering-trees.jpg"})}),Object(f.jsxs)("div",{className:D.a.profileHeader,children:[Object(f.jsx)("div",{className:D.a.name,children:t.user.fullName}),Object(f.jsx)("div",{className:D.a.avatar,children:Object(f.jsx)("img",{alt:"",src:t.user.photos.small||"https://pm1.narvii.com/6526/3c85b728f80710521171197855342fd1d88876fb_hq.jpg"})})]}),Object(f.jsx)(m,{status:t.status,updateUserStatus:t.updateUserStatus})]}):Object(f.jsx)(_.a,{})},h=s(76),O=s(248),B=s.n(O);var v=function(t){return Object(f.jsxs)("div",{className:B.a.post,children:[Object(f.jsxs)("div",{className:B.a.main_area,children:[Object(f.jsx)("img",{className:B.a.post_avatar,alt:"",src:"https://cdn.xxl.thumbs.canstockphoto.ru/%D0%BF%D1%83%D1%80%D0%BF%D1%83%D1%80%D0%BD%D1%8B%D0%B9-%D1%86%D0%B2%D0%B5%D1%82-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82-%D0%BC%D0%BE%D0%B7%D0%B0%D0%B8%D0%BA%D0%B0-%D0%B7%D0%B0%D0%B4%D0%BD%D0%B8%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BD-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B5-%D0%B2-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B5-eps_csp34882537.jpg"}),Object(f.jsx)("div",{className:B.a.post_text,children:t.post_text})]}),Object(f.jsxs)("div",{className:B.a.add_area,children:["\u041b\u0430\u0439\u043a\u0438: ",t.likes]})]})},N=s(249),P=s.n(N),g=s(29),k=s(55),S=u.a.memo((function(t){return Object(f.jsx)(g.d,{initialValues:{postText:""},validationSchema:k.a({postText:k.b().max(350).required()}),onSubmit:function(e,s){var a=s.setSubmitting;setTimeout((function(){t.addPost(e.postText),e.postText="",a(!1)}),400)},children:function(t){var e=t.isSubmitting;return Object(f.jsxs)(g.c,{className:P.a.submit_box,children:[Object(f.jsx)(g.b,{as:"textarea",name:"postText",className:P.a.submit_area,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442!"}),Object(f.jsx)("button",{className:P.a.submit_button,type:"submit",disabled:e,children:" \u0416\u043c\u044f\u043a"})]})}})}));var T=function(t){var e=t.posts.map((function(t){return Object(f.jsx)(v,{post_text:t.post_text,likes:t.likes},t.id)}));return Object(f.jsxs)("div",{className:P.a.wall,children:[Object(f.jsx)(S,{addPost:t.addPost}),e]})},H=Object(l.b)((function(t){return{posts:t.profile.posts}}),(function(t){return{addPost:function(e){t(Object(h.a)(e))},updateNewPostText:function(e){t(Object(h.d)(e))}}}))(T);var U=function(t){return Object(f.jsxs)("div",{className:d.a.profile,children:[Object(f.jsx)(x,{updateUserStatus:t.updateUserStatus,user:t.user,status:t.status}),Object(f.jsx)(H,{store:t.store})]})},w=s(7),y=s(35),C=function(t){Object(o.a)(s,t);var e=Object(c.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.id)||this.props.history.push("/login"),this.props.getUserProfileThunk(t)}},{key:"render",value:function(){return Object(f.jsx)(U,Object(a.a)(Object(a.a)({},this.props),{},{user:this.props.user}))}}]),s}(u.a.Component);e.default=Object(y.c)(Object(l.b)((function(t){return{user:t.profile.user,id:t.auth.id,status:t.profile.status}}),{getUserProfileThunk:h.c,updateUserStatus:h.e}),w.f)(C)}}]);
//# sourceMappingURL=3.89a88be7.chunk.js.map