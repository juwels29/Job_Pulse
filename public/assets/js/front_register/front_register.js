/*document.addEventListener("DOMContentLoaded",(function(){if($("#addEmployerNewForm").length||$("#addCandidateNewForm").length){$("#loginTab a").click((function(e){e.preventDefault(),$(this).tab("show")})),$("ul.nav-tabs > li > a").on("shown.bs.tab",(function(e){var a=$(e.target).attr("href").substr(1);window.location.hash=a,document.body.scrollTop=0,document.documentElement.scrollTop=0}));var e=window.location.hash;$('#loginTab a[href="'+e+'"]').tab("show"),$("#candidate").on("hidden.bs.tab",(function(){resetModalForm("#candidateForm","#candidateValidationErrBox")})),$("#employer").on("hidden.bs.tab",(function(){resetModalForm("#employeeForm","#employerValidationErrBox")})),listenSubmit("#addCandidateNewForm",(function(e){if(e.preventDefault(),isGoogleReCaptchaEnabled&&!checkGoogleReCaptcha(1))return!0;processingBtn("#addCandidateNewForm","#btnCandidateSave","loading"),$.ajax({url:registerSaveUrl,type:"POST",data:$(this).serialize(),success:function(e){e.success&&(displaySuccessMessage(e.message),setTimeout((function(){window.location=candidateLogInUrl}),1500))},error:function(e){displayErrorMessage(e.responseJSON.message)},complete:function(){processingBtn("#addCandidateNewForm","#btnCandidateSave")}})})),listenSubmit("#addEmployerNewForm",(function(e){if(e.preventDefault(),processingBtn("#addEmployerNewForm","#btnEmployerSave","loading"),isGoogleReCaptchaEnabled&&!checkGoogleReCaptcha(2))return!0;$.ajax({url:registerSaveUrl,type:"POST",data:$(this).serialize(),success:function(e){e.success&&(displaySuccessMessage(e.message),setTimeout((function(){window.location=employerLogInUrl}),1500))},error:function(e){displayErrorMessage(e.responseJSON.message)},complete:function(){processingBtn("#addEmployerNewForm","#btnEmployerSave")}})}))}}));*/