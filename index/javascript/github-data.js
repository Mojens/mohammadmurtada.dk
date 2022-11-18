import {Octokit} from "https://cdn.skypack.dev/@octokit/core";

function formatGitDate(date){
    let dateWOT = date.split('T');
    let dateWOTSplitted = dateWOT[0].split('-');
    return dateWOTSplitted[2] + '-' + dateWOTSplitted[1] + '-' + dateWOTSplitted[0];
}

let tokenInput = document.getElementById('api-token-input');

const octokit = new Octokit({
    auth: tokenInput.value
})

async function showGitHubDate(repoName, elementId) {
    let dateWT = await octokit.request('GET /repos/{owner}/{repo}/commits/master', {
        owner: 'Mojens',
        repo: repoName
    }).then((response) => {
        return response.data.commit.author.date;
    });

    document.getElementById(elementId).innerHTML = '<b class="bold-date">last updated:</b>'+' ' + formatGitDate(dateWT)
}

showGitHubDate('mohammadmurtada.dk', 'github-date');
showGitHubDate('javascript-exercises', 'github-date-1').then();
showGitHubDate('WebClientAsynchronousCalls', 'github-date-2').then();
showGitHubDate('start-code-bootstrap', 'github-date-3').then();
showGitHubDate('Backend_Template', 'github-date-4').then();

