// JavaScript File

document.getElementById('interest').onclick = function(){
document.getElementById('interests').style.display = "block";
document.getElementById('profile-text').style.display = "none";
document.getElementById('education-text').style.display = "none";
document.getElementById('skills').style.display = "none";
document.getElementById('contacts').style.display = "none";    
}
document.getElementById('profile').onclick = function(){
document.getElementById('profile-text').style.display = "block";
document.getElementById('education-text').style.display = "none";
document.getElementById('skills').style.display = "none";
document.getElementById('interests').style.display = "none";
document.getElementById('contacts').style.display = "none";    
}
document.getElementById('education').onclick = function(){
document.getElementById('education-text').style.display = "block";
document.getElementById('profile-text').style.display = "none";
document.getElementById('skills').style.display = "none";
document.getElementById('interests').style.display = "none";
document.getElementById('contacts').style.display = "none";    
}
document.getElementById('skillz').onclick = function(){
document.getElementById('skills').style.display = "block";
document.getElementById('profile-text').style.display = "none";
document.getElementById('education-text').style.display = "none";
document.getElementById('interests').style.display = "none";
document.getElementById('contacts').style.display = "none";
}
document.getElementById('contact').onclick = function(){
document.getElementById('contacts').style.display = "block";
document.getElementById('profile-text').style.display = "none";
document.getElementById('education-text').style.display = "none";
document.getElementById('interests').style.display = "none";
document.getElementById('skills').style.display = "none";
}
