package lertxundi.gorka.katualai.controller;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import lertxundi.gorka.katualai.form.CatInformForm;

@Controller
public class CatInformController {
    
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @PostMapping("/catform")
    public String catForm(Model model) {
        return "cat-form";
    }

    @PostMapping("/catdoc")
    public String getFormData(@ModelAttribute CatInformForm form, Model model) {
        form.setKatuArgazkia("/img/"+form.getKatuArgazkia());
        model.addAttribute("form", form);
        return "cat-document";
    }
}
