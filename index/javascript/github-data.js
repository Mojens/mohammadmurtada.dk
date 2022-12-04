import {Octokit} from "https://cdn.skypack.dev/@octokit/core";
import { localDateTimeToDate } from "./customDateFormatter.js";

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

    document.getElementById(elementId).innerHTML = DOMPurify.sanitize('<b class="bold-date">last updated:</b>' + ' ' + localDateTimeToDate(dateWT));
}

showGitHubDate('Mojens', 'mohammadmurtada.dk', 'github-date', 'master');
showGitHubDate('Mojens', 'javascript-exercises', 'github-date-1', 'master').then();
showGitHubDate('Mojens', 'WebClientAsynchronousCalls', 'github-date-2', 'master').then();
showGitHubDate('Mojens', 'start-code-bootstrap', 'github-date-3', 'AzureBranch').then();
showGitHubDate('Mojens', 'start-code-bootstrap', 'github-hover-text1', 'master').then();
showGitHubDate('Mojens', 'Backend_Template', 'github-date-4', 'master').then();
showGitHubDate('Forza-Grasp', 'Fleet-management-Frontend', 'github-date-5', 'production').then();
showGitHubDate('Forza-Grasp', 'Fleet-management-Frontend', 'github-hover-text2', 'main').then();
showGitHubDate('Forza-Grasp', 'Fleet-management-Backend', 'github-date-6', 'production').then();
showGitHubDate('Forza-Grasp', 'Fleet-management-Backend', 'github-hover-text3', 'master').then();

