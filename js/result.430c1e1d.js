"use strict";(self["webpackChunkcoobook"]=self["webpackChunkcoobook"]||[]).push([[68],{7331:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var s=a(3396),o=a(7139);const i={key:0,class:"msg"};function c(e,t,a,c,r,n){const p=(0,s.up)("Loader"),u=(0,s.up)("RecipeList");return(0,s.wg)(),(0,s.iD)("div",null,[!1===r.isLoading?((0,s.wg)(),(0,s.iD)("div",i,[(0,s.Uk)(" '"),(0,s._)("span",null,(0,o.zw)(n.searchData),1),(0,s.Uk)("'에 대한 검색 결과는 다음과 같습니다."),(0,s._)("span",null," "+(0,o.zw)(r.recipes.length),1),(0,s.Uk)("건 ")])):(0,s.kq)("",!0),!0===r.isLoading?((0,s.wg)(),(0,s.j4)(p,{key:1})):(0,s.kq)("",!0),!1===r.isLoading?((0,s.wg)(),(0,s.j4)(u,{key:2,recipes:r.recipes,types:"search"},null,8,["recipes"])):(0,s.kq)("",!0)])}var r=a(1978),n=a(3085),p=a(70),u={components:{RecipeList:r.Z,Loader:n.Z},data(){return{isLoading:!1,recipes:[],searchData:"",total:""}},setup(){},created(){this.isLoading=!0,this.getRecipes()},computed:{searchData(){return this.getRecipes(),this.$route.query.searchData}},methods:{async getRecipes(){try{this.isLoading=!0;const e={method:"GET",url:`https://openapi.foodsafetykorea.go.kr/api/ef6ec22587e449e9af98/COOKRCP01/json/1/1000/RCP_NM=${this.$route.query.searchData}`},t=await p.ZP.request(e);console.log(t.data.COOKRCP01),this.total=t.data.COOKRCP01.total_count,"0"!==t.data.COOKRCP01.total_count?this.recipes=[...t.data.COOKRCP01.row]:this.recipes=[],this.isLoading=!1}catch(e){console.log(e)}}}},d=a(89);const h=(0,d.Z)(u,[["render",c],["__scopeId","data-v-b63ca6f8"]]);var l=h}}]);
//# sourceMappingURL=result.430c1e1d.js.map