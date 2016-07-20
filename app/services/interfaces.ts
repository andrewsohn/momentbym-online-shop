export interface IAppData {
    pageList: IPage[];
    lastFileUpdate: string;
}

export interface IPage {
    text: string;
    icon: string;
    page_data: IPageData;
    children: IPage[];
}

export interface IPageData {
    code: string;
    group: string;
    category: string;
    subCategory: string;
    title: string;
    lastUpdate: string;
    type: string;
    updateIcon: boolean;
    newIcon: boolean;
    isLnb: boolean;
    depth: number;
    sTag: string;
    overView: string;
    newPage: string;
    oldPage: string;
    url: string;
    sortKey: string;
    nextBtn: string;
    prevBtn: string;
    relatedGuide: IGuide[];
    downloadFile: string;
    downloadAll: string;
}

export interface IGuide {
    code: string;
    url: string;
}