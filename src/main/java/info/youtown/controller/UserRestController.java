package info.youtown;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;

import info.youtown.model.User;
import info.youtown.repositories.UserRepository;

@RestController
public class UserRestController {

    @Autowired
    UserRepository repository;

    @CrossOrigin
    @RequestMapping(value = "/api/v1/users", method = RequestMethod.GET)
    public List<User> restAll() {
        return repository.findAll();
    }

    @RequestMapping(value = "/api/v1/users/{id}", method = RequestMethod.GET)
    //public User getUser(@PathVariable String id) {
    public User getUser(@PathVariable("id") String id) {
        return repository.findById(id);
    }

    @RequestMapping(value = "/api/v1/users/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public User updateUser(@PathVariable("id") String id, @Validated @RequestBody User user) {
        user.setId(id);
        repository.save(user);
        return user;
    }

    @RequestMapping(value = "/api/v1/users/new", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@Validated @RequestBody User user) {
        repository.save(user);
        return user;
    }

    @RequestMapping(value = "/api/v1/users/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@PathVariable("id") Long id) {
        repository.delete(id);
    }
}
