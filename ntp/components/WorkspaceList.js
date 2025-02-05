import { Workspace } from './Workspace';

export class WorkspaceList {
  constructor(workspaceService) {
    this.workspaceService = workspaceService;
    this.activeWorkspace = null;
  }

  async render() {
    const workspaces = await this.workspaceService.getAllWorkspaces();
    return `
      <div class="workspace-list">
        ${workspaces.map(workspace => 
          new Workspace(workspace, this.workspaceService).render()
        ).join('')}
      </div>
    `;
  }

  handleWorkspaceClick(workspaceId) {
    this.workspaceService.switchToWorkspace(workspaceId);
  }
}