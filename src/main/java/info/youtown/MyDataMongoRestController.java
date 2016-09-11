package info.youtown;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import info.youtown.repositories.MyDataMongoRepository;

@RestController
public class MyDataMongoRestController {

    @Autowired
    MyDataMongoRepository repository;

    @RequestMapping(value = "/api/v1/users", method = RequestMethod.GET)
    public List<MyDataMongo> restAll() {
        return repository.findAll();
    }

    @RequestMapping(value = "/api/vi/users/{id}", method = RequestMethod.GET)
    public MyDataMongo restBy(@PathVariable String id) {
        return repository.findById(id);
    }
}
