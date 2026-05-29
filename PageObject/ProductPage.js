export class ProductPage{
    /**
     * @param{import ('@playwright/test').Page}page
     */

    constructor(page){
        this.page=page
        //this.firstPro=page.locator('//p[text()="Blue Top"]/ancestor::div[@class="single-products"]/following-sibling::div/ul/li/a')
        this.firstPro=page.getByText('View Product').first()
        this.proName=page.getByText('Blue Top')
        this.catName=page.getByText('Category: Women > Tops')
        this.price=page.getByText('Rs. 500')
        this.avail=page.getByText(' In Stock')
        this.cond=page.getByText(' New')
        this.brand=page.getByText(' Polo').first()
        this.searchTxt=page.locator('#search_product')
        this.searchBtn=page.locator('#submit_search')
        this.searchProTitle=page.getByText('Searched Products')
        this.allProduct=page.locator('//div[@class="features_items"]/div')

    }

    async firstProPage(){
        await this.firstPro.click()
    }
    async searchProduct(proname){
        await this.searchTxt.fill(proname)
        await this.searchBtn.click()
    }
  
}