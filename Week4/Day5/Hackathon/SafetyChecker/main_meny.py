import tkinter as tk
from tkinter import simpledialog
# from tkinter.simpledialog import askstring
from country import Country  # Make sure to import the Country class

# class CountrySafetyApp:
#     def __init__(self, master):
#         self.master = master
#         master.title("Country Safety Checker")

#         self.label = tk.Label(master, text="Hello, traveler!")
#         self.label.pack()

#         self.create_widgets()

#     def create_widgets(self):
#         self.menu_label = tk.Label(self.master, text="Choose an option:")
#         self.menu_label.pack()

#         self.check_button = tk.Button(self.master, text="Check Safety of One Country", command=self.check_single_country)
#         self.check_button.pack()

#         self.compare_button = tk.Button(self.master, text="Compare Safety of Two Countries", command=self.compare_countries)
#         self.compare_button.pack()

#         self.exit_button = tk.Button(self.master, text="Exit", command=self.master.destroy)
#         self.exit_button.pack()

#     def check_single_country(self):
#         self.menu_label.config(text="Enter the country you want to check:")
#         user_input = simpledialog.askstring("Input", "Enter country:")
#         if user_input:
#             country = Country(user_input.capitalize())
#             result = f"\nSafety status of {user_input.capitalize()}:\n"
#             result += country.get_safety_status()
#             self.display_result(result)

#     def compare_countries(self):
#         self.menu_label.config(text="Enter two countries separated by a comma:")
#         user_input = simpledialog.askstring("Input", "Enter two countries separated by a comma:")
#         if user_input:
#             countries = [c.strip().capitalize() for c in user_input.split(',')]
#             if len(countries) == 2:
#                 country1, country2 = countries
#                 country_obj1 = Country(country1)
#                 country_obj2 = Country(country2)
#                 result = f"\nComparison of {country1} and {country2}:\n"
#                 result += f"{country1}: {country_obj1.get_safety_status()}\n"
#                 result += f"{country2}: {country_obj2.get_safety_status()}\n"
#                 self.display_result(result)

#     def display_result(self, result):
#         result_window = tk.Toplevel(self.master)
#         result_label = tk.Label(result_window, text=result)
#         result_label.pack()

# if __name__ == "__main__":
#     root = tk.Tk()
#     app = CountrySafetyApp(root)
#     root.mainloop()



class CountrySafetyApp:
    def __init__(self, master):
        self.master = master
        master.title("Country Safety Checker")

        self.label = tk.Label(master, text="Hello, traveler!", height=1, width=200, font=("Helvetica", 30))
        self.label.pack()

        self.create_widgets()

    def create_widgets(self):
        self.menu_label = tk.Label(self.master, text="Choose an option:", height=1, width=80, font=("Helvetica", 30))
        self.menu_label.pack()

        self.check_button = tk.Button(self.master, text="Check Safety of One Country",height=2, width=60, font=("Helvetica", 30), command=self.check_single_country)
        self.check_button.pack()

        self.compare_button = tk.Button(self.master, text="Compare Safety of Two Countries", height=2, width=60, font=("Helvetica", 30), command=self.compare_countries)
        self.compare_button.pack()

        self.exit_button = tk.Button(self.master, text="Exit", font=("Helvetica", 30), height=2, width=60, command=self.master.destroy)
        self.exit_button.pack()

    def check_single_country(self):
        self.menu_label.config(text="Enter the country you want to check:")
        user_input = tk.simpledialog.askstring("Input", "Enter country:")
        if user_input:
            country = Country(user_input.strip().capitalize())
            result = f"\nSafety status of {user_input.capitalize()}:\n"
            result += country.get_safety_status()
            self.display_result(result)

    def compare_countries(self):
        self.menu_label.config(text="Enter two countries separated by a comma:")
        user_input = tk.simpledialog.askstring("Input", "Enter two countries separated by a comma:")
        if user_input:
            countries = [c.strip().capitalize() for c in user_input.split(',')]
            if len(countries) == 2:
                country1, country2 = countries
                country_obj1 = Country(country1)
                country_obj2 = Country(country2)
                result = f"\nComparison of {country1} and {country2}:\n"
                result += f"{country1}: {country_obj1.get_safety_status()}\n"
                result += f"{country2}: {country_obj2.get_safety_status()}\n"
                self.display_result(result)

    def display_result(self, result):
        result_window = tk.Toplevel(self.master)
        result_label = tk.Label(result_window, text=result)
        result_label.pack()

if __name__ == "__main__":
    root = tk.Tk()
    app = CountrySafetyApp(root)
    root.mainloop()