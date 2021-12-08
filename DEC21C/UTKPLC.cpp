//
// Created by PhantomCracker  on 08-Dec-21.
//

#include <iostream>
#include <string>
#include <algorithm>

char selectedCompany(std::string preferredCompanies, std::string companies) {
    for (int i = 0; i < preferredCompanies.length(); i++) {
            for (int j = 0; j < companies.length(); j++) {
                if (preferredCompanies[i] == companies[j]) {
                    return preferredCompanies[i];
                }
            }
        }
    return 0;
}

int main() {
    int T;
    std::cin >> T;
    std::cin.ignore();
    while (T--) {
        std::string preferredCompanies;
        std::string companies;
        std::getline(std::cin, preferredCompanies);
        std::getline(std::cin, companies);
        preferredCompanies.erase(std::remove_if(preferredCompanies.begin(), preferredCompanies.end(), ::isspace), preferredCompanies.end());
        companies.erase(std::remove_if(companies.begin(), companies.end(), ::isspace), companies.end());
        std::cout << selectedCompany(preferredCompanies, companies) << std::endl;
    }
    std::cout << std::endl;
    return 0;
}