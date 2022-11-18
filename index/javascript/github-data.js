import {Octokit} from "https://cdn.skypack.dev/@octokit/core";

function formatGitDate(date) {
    let dateWOT = date.split('T');
    let dateWOTSplitted = dateWOT[0].split('-');
    return dateWOTSplitted[2] + '-' + dateWOTSplitted[1] + '-' + dateWOTSplitted[0];
}

let tokenInput = document.getElementById('api-token-input');

const octokit = new Octokit({
    auth: tokenInput.value
})

async function showGitHubDate(ownerName, repoName, elementId, branchName) {
    let dateWT = await octokit.request('GET /repos/{owner}/{repo}/commits/{branch}', {
        owner: ownerName,
        repo: repoName,
        branch: branchName
    }).then((response) => {
        return response.data.commit.author.date;
    });

    document.getElementById(elementId).innerHTML = DOMPurify.sanitize('<b class="bold-date">last updated:</b>' + ' ' + formatGitDate(dateWT));
}

showGitHubDate('Mojens', 'mohammadmurtada.dk', 'github-date', 'master');
showGitHubDate('Mojens', 'javascript-exercises', 'github-date-1', 'master').then();
showGitHubDate('Mojens', 'WebClientAsynchronousCalls', 'github-date-2', 'master').then();
showGitHubDate('Mojens', 'start-code-bootstrap', 'github-date-3', 'AzureBranch').then();
showGitHubDate('Mojens', 'start-code-bootstrap', 'github-hover-text1', 'master').then();
showGitHubDate('Mojens', 'Backend_Template', 'github-date-4', 'master').then();

