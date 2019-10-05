$(document).ready(function () {

    //------------Function get Projects titles names-------------
    $.getJSON('http://holbcheck.fun:5500/project', function (data) {
        let list_projects = [];
        for (let iterate of data.tasks) {
            const name_project = iterate.github_dir;
            let save_html = `
            <h4 class="title_project">${name_project}</h4>`;
            $('DIV#task_name').html(save_html);
            list_projects.push[save_html];
        }
        $('h4').append(list_projects);
    
     //------------Function get count Tasks not finished-------------
        let counter = 0;
        let list_task_not_do = [];
        for (let iterate_task of data.tasks) {
            if (iterate_task.checker_available === true) {
                counter = counter+1;
                let variable = iterate_task.title;
                list_task_not_do.push( ' ' + variable );
                let save_html_title = `
                <p class="size_titles"> <strong style="color: red; font-size: 19px"> Unfinished tasks ${counter} </strong> <br> </p>`
                $('DIV#title_projects').html(save_html_title);
                list_task_not_do.push[save_html_title];
            }
            $('#title_projects p').append(`<div> ${list_task_not_do} <br> </div>`);
        }

    
    });
});
