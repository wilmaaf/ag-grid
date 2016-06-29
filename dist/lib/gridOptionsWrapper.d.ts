// Type definitions for ag-grid v5.0.0-alpha.3
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { RowNode } from "./entities/rowNode";
import { GridOptions, NodeChildDetails, GetContextMenuItems, GetMainMenuItems, ProcessRowParams, ProcessCellForExportParams } from "./entities/gridOptions";
import { GridApi } from "./gridApi";
import { ColDef, IAggFunc } from "./entities/colDef";
import { ColumnApi } from "./columnController/columnController";
import { IViewportDatasource } from "./interfaces/iViewportDatasource";
import { ICellRendererFunc, ICellRenderer } from "./rendering/cellRenderers/iCellRenderer";
export declare class GridOptionsWrapper {
    private static MIN_COL_WIDTH;
    private gridOptions;
    private columnController;
    private eventService;
    private enterprise;
    private headerHeight;
    agWire(gridApi: GridApi, columnApi: ColumnApi): void;
    init(): void;
    isEnterprise(): boolean;
    isRowSelection(): boolean;
    isRowDeselection(): boolean;
    isRowSelectionMulti(): boolean;
    getContext(): any;
    isPivotMode(): boolean;
    isRowModelPagination(): boolean;
    isRowModelVirtual(): boolean;
    isRowModelViewport(): boolean;
    isRowModelDefault(): boolean;
    isShowToolPanel(): boolean;
    isToolPanelSuppressGroups(): boolean;
    isToolPanelSuppressValues(): boolean;
    isEnableCellChangeFlash(): boolean;
    isGroupSelectsChildren(): boolean;
    isGroupIncludeFooter(): boolean;
    isGroupSuppressBlankHeader(): boolean;
    isSuppressRowClickSelection(): boolean;
    isSuppressCellSelection(): boolean;
    isSuppressMultiSort(): boolean;
    isGroupSuppressAutoColumn(): boolean;
    isSuppressDragLeaveHidesColumns(): boolean;
    isForPrint(): boolean;
    isSuppressHorizontalScroll(): boolean;
    isSuppressLoadingOverlay(): boolean;
    isSuppressNoRowsOverlay(): boolean;
    isSuppressFieldDotNotation(): boolean;
    getFloatingTopRowData(): any[];
    getFloatingBottomRowData(): any[];
    getQuickFilterText(): string;
    isUnSortIcon(): boolean;
    isSuppressMenuHide(): boolean;
    getRowStyle(): any;
    getRowClass(): any;
    getRowStyleFunc(): Function;
    getRowClassFunc(): Function;
    getBusinessKeyForNodeFunc(): (node: RowNode) => string;
    getHeaderCellRenderer(): any;
    getApi(): GridApi;
    getColumnApi(): ColumnApi;
    isEnableColResize(): boolean;
    isSingleClickEdit(): boolean;
    getGroupDefaultExpanded(): number;
    getRowData(): any[];
    isGroupUseEntireRow(): boolean;
    getGroupColumnDef(): ColDef;
    isGroupSuppressRow(): boolean;
    getRowGroupPanelShow(): string;
    isAngularCompileRows(): boolean;
    isAngularCompileFilters(): boolean;
    isAngularCompileHeaders(): boolean;
    isDebug(): boolean;
    getColumnDefs(): any[];
    getDatasource(): any;
    getViewportDatasource(): IViewportDatasource;
    isEnableSorting(): boolean;
    isEnableCellExpressions(): boolean;
    isSuppressMiddleClickScrolls(): boolean;
    isSuppressPreventDefaultOnMouseWheel(): boolean;
    isEnableServerSideSorting(): boolean;
    isSuppressColumnVirtualisation(): boolean;
    isSuppressContextMenu(): boolean;
    isSuppressCopyRowsToClipboard(): boolean;
    isEnableFilter(): boolean;
    isEnableServerSideFilter(): boolean;
    isSuppressScrollLag(): boolean;
    isSuppressMovableColumns(): boolean;
    isSuppressColumnMoveAnimation(): boolean;
    isSuppressMenuColumnPanel(): boolean;
    isSuppressMenuFilterPanel(): boolean;
    isSuppressUseColIdForGroups(): boolean;
    isSuppressAggFuncInHeader(): boolean;
    isSuppressMenuMainPanel(): boolean;
    isEnableRangeSelection(): boolean;
    isRememberGroupStateWhenNewData(): boolean;
    getIcons(): any;
    getAggFuncs(): {
        [key: string]: IAggFunc;
    };
    getIsScrollLag(): () => boolean;
    getSortingOrder(): string[];
    getSlaveGrids(): GridOptions[];
    getGroupRowRenderer(): {
        new (): ICellRenderer;
    } | ICellRendererFunc | string;
    getGroupRowRendererParams(): any;
    getGroupRowInnerRenderer(): {
        new (): ICellRenderer;
    } | ICellRendererFunc | string;
    getOverlayLoadingTemplate(): string;
    getOverlayNoRowsTemplate(): string;
    getCheckboxSelection(): Function;
    isSuppressAutoSize(): boolean;
    isSuppressParentsInRowNodes(): boolean;
    isEnableStatusBar(): boolean;
    getHeaderCellTemplate(): string;
    getHeaderCellTemplateFunc(): (params: any) => string | HTMLElement;
    getNodeChildDetailsFunc(): ((dataItem: any) => NodeChildDetails);
    getGroupRowAggNodesFunc(): (nodes: RowNode[]) => any;
    getContextMenuItemsFunc(): GetContextMenuItems;
    getMainMenuItemsFunc(): GetMainMenuItems;
    getProcessCellForClipboardFunc(): (params: ProcessCellForExportParams) => any;
    getViewportRowModelPageSize(): number;
    getViewportRowModelBufferSize(): number;
    executeProcessRowPostCreateFunc(params: ProcessRowParams): void;
    getHeaderHeight(): number;
    setHeaderHeight(headerHeight: number): void;
    isExternalFilterPresent(): boolean;
    doesExternalFilterPass(node: RowNode): boolean;
    getLayoutInterval(): number;
    getMinColWidth(): number;
    getMaxColWidth(): number;
    getColWidth(): number;
    getRowBuffer(): number;
    private checkForDeprecated();
    getLocaleTextFunc(): Function;
    globalEventHandler(eventName: string, event?: any): void;
    getRowHeightAsNumber(): number;
    getRowHeightForNode(rowNode: RowNode): number;
}
