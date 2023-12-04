import math
class Pagination:
    def __init__(self, items, pageSize = 10):
        self.items = items
        self.pageSize = int(pageSize)
        self.totalPages = int(math.ceil(len(self.items)/self.pageSize))
        self.currentPage = 1

    def getVisibleItems(self):
        print(self.currentPage)
        visible_items = []
        try:
            for i in range(self.pageSize):
                visible_items.append(self.items[i+(self.currentPage-1)*self.pageSize]) 
        except:
            pass
        print (visible_items)
        return visible_items
    
    def nextPage(self):
        self.currentPage+=1
        if self.currentPage > self.totalPages:
            self.currentPage -= 1
            

    def prevPage(self):
        self.currentPage-=1
        if self.currentPage < 1:
            self.currentPage += 1
            

    def firstPage(self):
        self.currentPage = 1

    def lastPage(self):
        self.currentPage = self.totalPages
    
    def goToPage(self, pageNum):
        if int(pageNum) > self.totalPages:
            self.currentPage = self.totalPages
        elif int(pageNum) < 1:
            self.currentPage = 1
        else:
            self.currentPage = int(pageNum)

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 5.4)

p.getVisibleItems() 
p.nextPage()
p.getVisibleItems()
p.lastPage()
p.getVisibleItems()
p.firstPage()
p.getVisibleItems()
p.goToPage(3)
p.getVisibleItems()
p.goToPage(9)
p.getVisibleItems()
p.goToPage(0)
p.getVisibleItems()
p.goToPage(3.3)
p.getVisibleItems()